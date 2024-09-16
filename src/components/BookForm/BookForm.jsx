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

const BookForm = () => {
	const [date, setDate] = useState("");
	const handleDateChange = (event) => {
		setDate(event.target.value);
	};
	return (
		<Form>
			<FormTitle>Book your campervan now</FormTitle>
			<FormSubTitle>
				Stay connected! We are always ready to help you.
			</FormSubTitle>
			<FormInput type="text" id="name" placeholder="Name*" />
			<FormInput type="email" id="email" placeholder="Email*" />
			<StyledDateInput
				type="date"
				id="date"
				value={date}
				onChange={handleDateChange}
				hasValue={date !== ""}
				placeholder="Booking date*"
				onFocus={(e) => (e.target.type = "date")}
				onBlur={(e) => (e.target.type = date ? "date" : "text")}
			/>
			<FormTextArea type="text" id="comment" placeholder="Comment" />
			<FormBtn type="submit">Send</FormBtn>
		</Form>
	);
};
export default BookForm;
