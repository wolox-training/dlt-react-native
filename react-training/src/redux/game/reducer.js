const initialState = () =>
  ({
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  })

export default function reducer(store = initialState(), action) {
  return state;
}