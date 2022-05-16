export const types = {
    INCREASE: "INCREASE",
    INCREASE_SUCCESS: "INCREASE_SUCCESS",

    DECREASE: "DECREASE",
    RESET: "RESET"
}
export const increase = () => ({
    type: types.INCREASE
})
export const decrease = () => ({
    type: types.DECREASE
})
export const reset =() => ({
    type: types.RESET
})