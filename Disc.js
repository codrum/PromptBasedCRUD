export class Disc {
	// private vars
	#id
	#title
	#description

	/**
	 * Creates an instance of this class.
	 * @param {number} id The ID of this instance.
	 * @param {string} title The title of this instance.
	 * @param {string} description The description of this instance.
	 */
	constructor(id, title, description) {
		this.setId(id)
		this.setTitle(title)
		this.setDescription(description)
	}

	/**
	 * Gets the ID of this instance
	 * @returns the ID of this instance.
	 */
	getId() {
		return this.#id
	}

	/**
	 * Gets the title of this instance
	 * @returns the title of this instance.
	 */
	getTitle() {
		return this.#title
	}

	/**
	 * Gets the description of this instance
	 * @returns the description of this instance.
	 */
	getDescription() {
		return this.#description
	}

	/**
	 * Sets the ID of this instance.
	 * @param {number} newId The new ID to set
	 */
	setId(newId) {
		this.#id = newId
	}

	/**
	 * Sets the title of this instance
	 * @param {string} newTitle The new title of this instance
	 */
	setTitle(newTitle) {
		this.#title = newTitle
	}

	/**
	 * Sets the description of this instance
	 * @param {string} newDescription The new description of this instance
	 */
	setDescription(newDescription) {
		this.#description = newDescription
	}

	/**
	 * Generates the next ID for this instance.
	 * @returns the next ID of this class
	 */
	static incrementId() {
		if (!this.latestId) this.latestId = 1
		else this.latestId++
		return this.latestId
	}

    /**
     * Logs information about this instance.
     */
	view() {
		console.log(`${this.id} ${this.title}: ${this.description}`)
	}
}
