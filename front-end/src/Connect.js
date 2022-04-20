import axios from 'axios'

const paul="http://localhost:8080";

export const link=async(obj)=>{
   const hai=await axios.post(`${paul}/fresh`,obj)
   return hai;
}

export const gather=async()=>{
   const yet=await axios.get(`${paul}/home`)
   return yet;
}

export const reachone=async(position)=>{
   const t= await axios.get(`${paul}/getting/${position}`)
   return t;
}

export const updateOne=async(obj)=>{
   const hai=await axios.put(`${paul}/update`,obj)
   return hai;
}

export const erase=async(pk)=>{
   const t= await axios.delete(`${paul}/del/${pk}`)
   return t;
}