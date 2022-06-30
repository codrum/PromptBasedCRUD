import { Disc } from './Disc.js'
import { discs } from './discs.js'

export class Menu {
	/**
	 * Creates and populates this instance.
	 */
	constructor() {
		this.discs = []
		for (let disc of discs) {
			let newDisc = new Disc(
				Disc.incrementId(),
				disc.title,
				disc.description
			)
			this.discs.push(newDisc)
		}
	}

	/**
	 * The main menu of this instance. Allows users to view and edit Discs, and
	 * view information about the project.
	 */
	showMenu() {
		let menuItemNumber = prompt(' 1) View discs\n 2) Edit discs\n 3) About')

		switch (menuItemNumber) {
			case null:
				return
			case '1':
				this.view()
				break
			case '2':
				this.edit()
				break
			case '3':
				this.about()
				break
			default:
				alert('Invalid menu entry')
				this.showMenu()
				break
		}
	}

	/**
	 * Displays each Disc of this instance.
	 */
	view() {
		const discTitles = this.discs.map(
			(disc) =>
				`${disc.getId()} ${disc.getTitle()}: ${disc.getDescription()}`
		)
		alert(discTitles.join('\n'))
		this.showMenu()
	}

	/**
	 * The edit menu of this instance. Allows user access to add, edit, and delete menus.
	 */
	edit() {
		console.log('edit')
		const editPrompt = () => {
			const editDiscs = prompt('1) add\n2) edit\n3) delete')

			switch (editDiscs) {
				case null:
					return
				case '1':
					this.addNewDisc()
					break
				case '2':
					this.editDisc()
					break
				case '3':
					this.deleteDisc()
					break
				default:
					alert('Command not found')
					editPrompt()
			}
		}
		editPrompt()
	}

	/**
	 * Displays information about the project.
	 */
	about() {
		alert('This is a prompt based CRUD to view my Disc Golf collection')
		this.showMenu()
	}

	/**
	 * Prompts a user for new Disc information, then adds it to the disc array.
	 */
	addNewDisc() {
		console.log('add new disc')
		const title = prompt('Disc title')
		const description = prompt('Disc description')
		const newDisc = new Disc(Disc.incrementId(), title, description)
		this.discs.push(newDisc)
		this.showMenu()
	}

	/**
	 * Prompts user for new Disc information and updates the given Disc by ID.
	 */
	editDisc() {
		console.log('edit disc')
		const discIdToEdit = parseInt(prompt('Disc id to edit'))
		const indexToEdit = this.discs.findIndex(
			(disc) => disc.getId() === discIdToEdit
		)
		if (indexToEdit === -1) {
			alert('Disc ID not found.')
			this.showMenu()
		}

		const newTitle = prompt('New disc title')
		const newDescription = prompt('New disc description')

		this.discs[indexToEdit].setTitle(newTitle)
		this.discs[indexToEdit].setDescription(newDescription)

		alert(`Disc id ${discIdToEdit} has been saved.`)

		this.showMenu()
	}

	/**
	 * Prompts user for disc ID to delete and removes it.
	 */
	deleteDisc() {
		const idToDelete = parseInt(prompt('Disc ID to delete'))

		const indexToDelete = this.discs.findIndex(
			(disc) => disc.getId() === idToDelete
		)
		if (indexToDelete === -1) {
			alert('Disc ID not found.')
			this.showMenu()
		}
		this.discs.splice(indexToDelete, 1)

		alert(`disc id ${idToDelete} has been deleted`)
		this.showMenu()
	}
}
