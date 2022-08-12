import { Car } from './../interfaces';


it('create car', () => {
	const car = new Car({
		model: 'f1'
	})
	expect(car.props.model).toBeDefined()
})