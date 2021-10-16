import rewire from "rewire"
import React from "react"
import ReactDOM from "react-dom"
const App = rewire("./App")
const objectToQueryParam = App.__get__("objectToQueryParam")
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("objectToQueryParam", () => {
    test("0", () => {
        let callFunction = () => {
            objectToQueryParam({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            objectToQueryParam({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            objectToQueryParam({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            objectToQueryParam(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
