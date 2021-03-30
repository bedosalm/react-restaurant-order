import React, { Component } from 'react';
import{ Allfood} from "./data"

const orderContext = React.createContext();

const Orderprovider = orderContext.Provider;
const Orderconsumer = orderContext.Consumer



class Context extends Component {
    constructor(){
        super();
        this.state = {
            allData : Allfood,
            tabelData : {},
            Cmeal : [],
            Category : "",
            allCategories : [],
            mymeal : "",
            choosenMeal : {},
            quanity : "",
            total : 0,
            compo:0,
            spicy :0,
            categoryError : false,
            quentityError : false,

            newItemName:"",
            chooseCategory:"",
            addPrice: "",
            errorName : false,
            errorCategory : false,
            errorprice: false
        }
    }
  
    // Filter all categories and display it in drobdown menu

    filterCategory = () => {
        const choosenCategory = new Set(Allfood.map(items => items.category));
        this.setState({
            allCategories : [...choosenCategory]
        })
    }

     // get all categories objects after filtring
    getCategory  = category => {
       const categoryfilter =  Allfood.filter(item => item.category === category);
       this.setState({
           Cmeal : [...categoryfilter],
           
       },() => {
            this.setState({
                choosenMeal : this.state.Cmeal[0],
                mymeal : this.state.Cmeal[0].meal
            })
       })
    }
  
 
    // find item after choose category

    findMealItem = (meal) => {
       const tempCmeal = [...this.state.Cmeal]
       const choosenMeal = tempCmeal.find(item => item.meal === meal);
       this.setState({
           choosenMeal : choosenMeal
       })
    }
 
    //handel all event changes item

    handelMealItem = (e) => {
       this.setState({
           mymeal : e.target.value
       } , () => {
           this.findMealItem(this.state.mymeal)
       })
    }

    // oddons checked 
  
    handelCheck = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     if(e.target.checked){
         this.setState({
             [name] : name === "compo" ? Number(value) + 2 : Number(value) + 1 
         })
     }else{
        this.setState({
            [name] : name === "compo" ? Number(value) - 2 : Number(value) - 1 
        })
     }

    }


 // handel quantity
    handelqun = (e) => {
       this.setState({
           quanity : e.target.value,
       })
    }
 // get category afte select the item
    handelCategory = (e) => {
        this.setState(() => {
         return  { Category : e.target.value}
        }, () => {
          return  this.getCategory(this.state.Category)
        })  
    }
// calculate Total price
    getTotal  = () => {
        if(!this.state.Category){
            this.setState({
                categoryError : true
            })
        }else if(!this.state.quanity) {
          this.setState({
              quentityError : true
          })

          return false
        }
        else{
            const price = this.state.choosenMeal.price;
            const perquntity = this.state.quanity;
            const quntity = Number(perquntity)
            const thetotal = price * quntity;
            this.setState({
                total : thetotal + this.state.compo + this.state.spicy
            },() => {
                this.thetabel();
            })
        }

    }

    thetabel = () => {
        this.setState({
            tabelData :{quanity : Number(this.state.quanity) ,
             meal:this.state.mymeal,category:this.state.Category,compo:this.state.compo,
            spicy:this.state.spicy,price:this.state.choosenMeal.price}
        })
    }
 
    handelSubmit = (e) => {
     e.preventDefault();
     this.getTotal();

    }
    // new order button
    newOreder = () =>{
        this.setState({
          tabelData : {},
          total : 0,
          Category:"",
          Cmeal : [],
          quanity:""

        })
    }

    // adding new Meal

    handelnewMeal = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })

    }

    // handel required inputs

    handelSubmitMeal = (e) => {
        e.preventDefault();
        if(!this.state.chooseCategory){
            this.setState({
            errorCategory : true,
        })
        }else if(!this.state.newItemName){
            this.setState({
                errorName: true,
            })
        }
        else if(!this.state.addPrice){
            this.setState({
                errorprice : true,
            })
        }
        
        else{
            const tempData = [...this.state.allData];
            const newID = this.state.allData.length + 1;
            const newMeal = {id:newID,category:this.state.chooseCategory,price:this.state.addPrice,meal:this.state.newItemName}
            this.state.allData.push(newMeal)
            console.log(this.state.allData)
            this.setState({
                newItemName:"",
                chooseCategory:"",
                addPrice: "",
                compo:0,
                spicy:0
            })
        }
        

    }

    componentDidMount(){
        this.filterCategory();
    }


    render() {
        return (
            <Orderprovider value={{...this.state ,getCategory:this.getCategory,
            handelCategory:this.handelCategory,handelMealItem:this.handelMealItem,
            handelSubmit:this.handelSubmit,handelqun:this.handelqun,handelCheck:this.handelCheck
            ,newOreder:this.newOreder,handelnewMeal:this.handelnewMeal,handelSubmitMeal:this.handelSubmitMeal }}>
                {this.props.children}
            </Orderprovider>
        );
    }
}

export  {Context , Orderconsumer};