import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Form = styled.form`
	width: 641px;
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 10px;
	padding: 44px 57px;
`;
export const FormTitle = styled.p`
	font-size: 20px;
	font-weight: 600;
	line-height: 1.2;
	margin-bottom: 8px;
`;
export const FormSubTitle = styled.span`
	color: #475467;
	margin-bottom: 24px;
`;
export const FormInput = styled.input`
	border: none;
	outline: none;
	padding: 18px;
	border-radius: 10px;
	background-color: #f7f7f7;
	margin-bottom: 14px;
	font-weight: 700;
`;
export const FormTextArea = styled.textarea`
	border: none;
	outline: none;
	padding: 18px;
	border-radius: 10px;
	background-color: #f7f7f7;
	height: 114px;
	margin-bottom: 24px;
	resize: none;
`;
export const FormBtn = styled.button`
	width: 160px;
	background-color: #e44848;
	color: #ffffff;
	padding: 16px 60px;
	border-radius: 200px;
	margin: 0 auto;
`;
export const StyledDateInput = styled(DatePicker)`
	width: 100%;
	border: none;
	outline: none;
	padding: 18px;
	border-radius: 10px;
	background-color: #f7f7f7;
	color: #000000;
	margin-bottom: 14px;
`;
