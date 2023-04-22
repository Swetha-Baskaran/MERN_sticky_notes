import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "https://mern-sticky-notes-1944ia9pd-swetha-baskaran.vercel.app";

export const fetchTask = createAsyncThunk('list/fetchTask', async () => {
    const response = await axios.get(`${API_URL}/api/items`)
    return response.data
})

export const addTask = createAsyncThunk('list/addTask', async (obj) => {
    const response = await axios.post(`${API_URL}/api/item`, obj)
    return response.data
})

export const deleteTask = createAsyncThunk('list/deleteTask', async (id) => {
    const response = await axios.delete(`${API_URL}/api/item/${id}`)
    return response.data
})

export const updateTask = createAsyncThunk('list/updateTask', async (obj) => {
    const response = await axios.put(`${API_URL}/api/item/${obj._id}`, obj)
    console.log(obj)
    return response.data
})

