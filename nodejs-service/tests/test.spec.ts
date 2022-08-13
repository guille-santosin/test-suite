import { Car } from './../models/car';



it('create car', () => {
	const car = new Car({
		model: 'f1'
	})
	expect(car.props.model).toBeDefined()
})