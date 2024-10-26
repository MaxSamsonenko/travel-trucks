import { useState } from "react";
import {
	Form,
	FormTitle,
	FormSubTitle,
	FormInput,
	FormTextArea,
	FormBtn,
	StyledDateInput,
} from "./BookForm.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import "react-datepicker/dist/react-datepicker.css";

const BookForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		date: null,
		comment: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleDateChange = (date) => {
		setFormData((prevData) => ({
			...prevData,
			date: date,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Form Data:", formData);
		Notify.success(`Camper booked successfuly`);

		setFormData({ name: "", email: "", date: null, comment: "" });
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormTitle>Book your campervan now</FormTitle>
			<FormSubTitle>
				Stay connected! We are always ready to help you.
			</FormSubTitle>

			<FormInput
				type="text"
				id="name"
				placeholder="Name*"
				value={formData.name}
				onChange={handleChange}
			/>

			<FormInput
				type="email"
				id="email"
				placeholder="Email*"
				value={formData.email}
				onChange={handleChange}
			/>

			<StyledDateInput
				selected={formData.date}
				minDate={new Date()}
				onChange={handleDateChange}
				placeholderText="Booking date*"
			/>

			<FormTextArea
				type="text"
				id="comment"
				placeholder="Comment"
				value={formData.comment}
				onChange={handleChange}
			/>

			<FormBtn type="submit">Send</FormBtn>
		</Form>
	);
};

export default BookForm;

// import { useState } from "react";
// import {
// 	Form,
// 	FormTitle,
// 	FormSubTitle,
// 	FormInput,
// 	FormTextArea,
// 	FormBtn,
// 	StyledDateInput,
// } from "./BookForm.styled";

// import "react-datepicker/dist/react-datepicker.css";

// const BookForm = () => {
// 	const [date, setDate] = useState("");

// 	return (
// 		<Form>
// 			<FormTitle>Book your campervan now</FormTitle>
// 			<FormSubTitle>
// 				Stay connected! We are always ready to help you.
// 			</FormSubTitle>
// 			<FormInput type="text" id="name" placeholder="Name*" />
// 			<FormInput type="email" id="email" placeholder="Email*" />
// 			<StyledDateInput
// 				selected={date}
// 				minDate={new Date()}
// 				onChange={(date) => setDate(date)}
// 				placeholderText="Booking date*"
// 			/>
// 			<FormTextArea type="text" id="comment" placeholder="Comment" />
// 			<FormBtn type="submit">Send</FormBtn>
// 		</Form>
// 	);
// };
// export default BookForm;
