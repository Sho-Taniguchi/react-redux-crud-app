// viewを担当するコンポーネントで呼び出して適切な状態遷移を実行させるための仕組み
// アクションを定義
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// アクションクリエーター（アクションをリターン）
export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})
