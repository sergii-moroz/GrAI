import QRCode from "react-qr-code"

export const MyQRCode = ({value, videoUrl}) => {
	return (
		<div className="qr-code-wrapper">
			<QRCode
				value={value}
				className={ videoUrl === "" ? "qr-code" : "qr-code qr-code-animation" }
				fgColor="#c473ca"
			/>
		</div>
	);
}