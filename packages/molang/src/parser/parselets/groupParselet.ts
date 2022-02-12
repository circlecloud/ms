import { IPrefixParselet } from './prefix'
import { Token } from '../../tokenizer/token'
import { Parser } from '../parse'
import { GroupExpression } from '../expressions/group'

export class GroupParselet implements IPrefixParselet {
	constructor(public precedence = 0) {}

	parse(parser: Parser, token: Token) {
		const expression = parser.parseExpression(this.precedence)
		parser.consume('RIGHT_PARENT')

		if (parser.config.keepGroups)
			return new GroupExpression(expression, '()')

		return expression
	}
}
