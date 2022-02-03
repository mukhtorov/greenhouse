import { flowers } from "../components/mock/flower"

export const category = [
{id:1,count:flowers.filter((value)=> value.category==='Potter Plants').length
,path:'/:houseplants', count:flowers.filter((value)=> value.category==='Potter Plants').length ,
title:'House Plants'},
{id:2 ,path:'/:potterplants',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Potter Plants'},
{id:3 ,path:'/:seeds',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Seeds'},
{id:4 ,path:'/:smallplants',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Small Plants'},
{id:5 ,path:'/:bigplants',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Big Plants'},
{id:6 ,path:'/:succulents',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Succulents'},
{id:7 ,path:'/:trerrariums',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Trerrariums'},
{id:8 ,path:'/:gardening',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Gardening'},
{id:9 ,path:'/:accessories',count:flowers.filter((value)=> value.category==='Potter Plants').length 
,title:'Accessories'}
]