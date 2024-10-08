const IconMap = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		fill="none"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="#101828"
				fillRule="evenodd"
				d="M15.817.113A.499.499 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.497.497 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103ZM10 1.91l-4-.8v12.98l4 .8V1.91Zm1 12.98 4-.8V1.11l-4 .8v12.98Zm-6-.8V1.11l-4 .8v12.98l4-.8Z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h16v16H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default IconMap;
