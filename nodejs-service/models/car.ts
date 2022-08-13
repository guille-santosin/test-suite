import { Entity } from "../shared/Entity"

interface CarProps {
	model: string
}
export class Car extends Entity<CarProps> {
	constructor(props: CarProps) {
		super(props)
	}
}