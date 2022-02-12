import { Expression } from '../expression'

export class StringExpression extends Expression {
	type = 'StringExpression'

	constructor(protected name: string) {
		super()
	}

	get allExpressions() {
		return []
	}
	setExpressionAt() {}

	isStatic() {
		return true
	}

	eval() {
		return this.name.substring(1, this.name.length - 1)
	}

	toString() {
		return this.name
	}
}
