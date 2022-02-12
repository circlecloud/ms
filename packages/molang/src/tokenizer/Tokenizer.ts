import { TokenTypes, KeywordTokens } from './tokenTypes'
import { Token } from './token'

export class Tokenizer {
	protected keywordTokens: Set<string>
	protected i = 0
	protected currentColumn = 0
	protected currentLine = 0
	protected lastColumns = 0
	protected expression!: string

	constructor(addKeywords?: Set<string>) {
		if (addKeywords)
			this.keywordTokens = new Set([...KeywordTokens, ...addKeywords])
		else this.keywordTokens = KeywordTokens
	}

	init(expression: string) {
		this.currentLine = 0
		this.currentColumn = 0
		this.lastColumns = 0
		this.i = 0
		this.expression = expression
	}

	next(): Token {
		this.currentColumn = this.i - this.lastColumns

		while (
			this.i < this.expression.length &&
			(this.expression[this.i] === ' ' ||
				this.expression[this.i] === '\t' ||
				this.expression[this.i] === '\n')
		) {
			if (this.expression[this.i] === '\n') {
				this.currentLine++
				this.currentColumn = 0
				this.lastColumns = this.i + 1
			}
			this.i++
		}

		// This is unnecessary for parsing simple, vanilla molang expressions
		// Might make sense to move it into a "TokenizerWithComments" class in the future
		if (this.expression[this.i] === '#') {
			const index = this.expression.indexOf('\n', this.i + 1)
			this.i = index === -1 ? this.expression.length : index
			this.currentLine++
			this.lastColumns = this.i + 1
			this.currentColumn = 0
			return this.next()
		}

		// Check tokens with one char
		let token = TokenTypes[this.expression[this.i]]
		if (token) {
			return new Token(
				token,
				this.expression[this.i++],
				this.currentColumn,
				this.currentLine
			)
		} else if (
			this.isLetter(this.expression[this.i]) ||
			this.expression[this.i] === '_'
		) {
			let j = this.i + 1
			while (
				j < this.expression.length &&
				(this.isLetter(this.expression[j]) ||
					this.isNumber(this.expression[j]) ||
					this.expression[j] === '_' ||
					this.expression[j] === '.')
			) {
				j++
			}

			const value = this.expression.substring(this.i, j).toLowerCase()

			this.i = j
			return new Token(
				this.keywordTokens.has(value) ? value.toUpperCase() : 'NAME',
				value,
				this.currentColumn,
				this.currentLine
			)
		} else if (this.isNumber(this.expression[this.i])) {
			let j = this.i + 1
			let hasDecimal = false
			while (
				j < this.expression.length &&
				(this.isNumber(this.expression[j]) ||
					(this.expression[j] === '.' && !hasDecimal))
			) {
				if (this.expression[j] === '.') hasDecimal = true
				j++
			}

			const token = new Token(
				'NUMBER',
				this.expression.substring(this.i, j),
				this.currentColumn,
				this.currentLine
			)
			// Support notations like "0.5f"
			const usesFloatNotation = hasDecimal && this.expression[j] === 'f'

			this.i = usesFloatNotation ? j + 1 : j

			return token
		} else if (this.expression[this.i] === "'") {
			let j = this.i + 1
			while (j < this.expression.length && this.expression[j] !== "'") {
				j++
			}
			j++
			const token = new Token(
				'STRING',
				this.expression.substring(this.i, j),
				this.currentColumn,
				this.currentLine
			)
			this.i = j
			return token
		}

		if (this.hasNext()) {
			this.i++
			return this.next()
		}
		return new Token('EOF', '', this.currentColumn, this.currentLine)
	}
	hasNext() {
		return this.i < this.expression.length
	}

	protected isLetter(char: string) {
		return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
	}

	protected isNumber(char: string) {
		return char >= '0' && char <= '9'
	}
}
