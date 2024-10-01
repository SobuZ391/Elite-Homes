"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Button } from "./ui/button";


  function generatePriceValues(){
    let price =[];
    for (let i=1; i<=6; i++){
        price.push(i*100);
    }
    return price;
  }
  type FormValues ={
    adddress: string;
    categories:string;
    minPrice:string;
    maxPrice:string;
  }

export function SearchForm(){
    const prices = generatePriceValues();

    const form =useForm<FormValues>({
        defaultValues:{
            address:"",
        },
    });

function formSubmitHandler(data:FormValues){
    console.log(data);
}

return <Form {...form}>
     <form className="p-6 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end bg-background rounded" onSubmit={form.handleSubmit(formSubmitHandler)}>
     <FormField control={form.control}  name="address" render={({field})=>{
            return <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                    <Input placeholder="Search by Address"{...field}  />
                </FormControl>
            </FormItem>
        }}/>

        
     <FormField control={form.control}  name="Categories" render={({ field })=>{
            return (
            <FormItem>
                <FormLabel> Categories</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger >
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="House">House</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="Office">Office</SelectItem>
            </SelectContent>
          </Select>
                
            </FormItem>
        )}}/>

        
     <FormField control={form.control}  name="min-price" render={({ field })=>{
            return (
            <FormItem>
                <FormLabel> Min. Price</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger >
              <SelectValue placeholder="Min. Price" />
            </SelectTrigger>
            <SelectContent>
              {prices.map((price)=>(
            <SelectItem key={price} value={price.toString()}>{price}</SelectItem>
              ))}
            </SelectContent>
          </Select>
                
            </FormItem>
        )}}/>

       
     <FormField control={form.control}  name="max-price" render={({ field })=>{
            return (
            <FormItem>
                <FormLabel> Max Price</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger >
              <SelectValue placeholder="Max. Price" />
            </SelectTrigger>
            <SelectContent>
              {prices.map((price)=>(
            <SelectItem key={price} value={price.toString()}>{price}</SelectItem>
              ))}
            </SelectContent>
          </Select>
                
            </FormItem>
        )}}/>
       
            <Button className="col-start-[1] col-end-[-1]">Search</Button>
     </form>

    </Form>
}