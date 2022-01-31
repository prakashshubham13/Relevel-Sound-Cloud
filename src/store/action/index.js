import { get_Data,Loading_Data } from "../type";

export const getData = (data) => (
    {
        type:get_Data,
        payload:data
    }
)

export const loadingData = (data) => (
    {
        type:Loading_Data
    }
)