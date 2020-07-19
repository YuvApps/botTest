// import * as brain from 'brain.js'
//
// const brainJsService = () => {
//     const config = {
//         learningRate: 0.1,
//         hiddenLayers: [3],
//         activation: 'sigmoid'
//     }
//     const net = new brain.NeuralNetwork()
//
//     net.train([{input: [0, 0], output: [0]},
//         {input: [0, 1], output: [1]},
//         {input: [1, 0], output: [1]},
//         {input: [1, 1], output: [0]}]);
//
//     let output = net.run([0, 0]);
//
//     console.log(output)
//     return output
// }
//
// export default brainJsService