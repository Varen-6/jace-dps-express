
let evalCommand = require("../eval")


describe("eval test suite", () => {
	test("command should be defined", () => {
		expect(eval).toBeDefined()
	})
	test("should returns correct result for empty collection", () => {
		
		let command = {
			settings:{}
		}
		
		let state= {
			head:{
				data: [],
				type:"json"
			}
		}

		let res = evalCommand.execute(command, state)
		expect(res.head.type).toBe("json")
		expect(res.head.data).toEqual({})
			
	})

	test("should returns counts for selected fields", () => {
		
		let command = {
			settings:{
				mapper: d => d.b
			}
		}
		
		let state= {
			head:{
				data: [
					{
						a:1,
						b:"a"
					},
					{
						a:2,
						b:"a"
					}
				],
				type:"json"
			}
		}

		let res = evalCommand.execute(command, state)
		expect(res.head.type).toBe("json")
		expect(res.head.data).toEqual( {a:  2})

		command.settings.mapper = d => d.a
		state = {
			head:{
				data: [
					{
						a:1,
						b:"a"
					},
					{
						a:2,
						b:"a"
					}
				],
				type:"json"
			}
		}
		
		res = evalCommand.execute(command, state)
		expect(res.head.type).toBe("json")
		expect(res.head.data).toEqual( {  '1': 1, '2': 1} )
			
	})

	test("should throws exception when data is not a collection on head", () => {
		
		let command = {
			settings:{
			}
		}
		
		let state= {
			head:{
				data: {
					a:1,
					b:"a"
				},
				type:"json"
			}
		}

		expect( () => { evalCommand.execute(command, state) } ).toThrow()
			
	})
})