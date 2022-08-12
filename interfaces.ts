

interface CarProps {
	model: string
}

export abstract class Entity<IProps> {
	props: IProps
	constructor(props: IProps) {
		this.props = props
	}
}

export class Car extends Entity<CarProps> {
	constructor(props: CarProps) {
		super(props)
	}
}