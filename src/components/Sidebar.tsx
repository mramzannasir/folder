import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {AiFillFolderOpen} from "react-icons/ai"

const Sidebar = () => {
	const [dots, setDots] = useState<number>(0);
	const first = () => {
		setDots(1);
		if (dots === 1) {
			setDots(0);
		}
	};
  const second = () => {
		setDots(2);
		if (dots === 2) {
			setDots(0);
		}
	};
  const three = () => {
		setDots(3);
		if (dots === 3) {
			setDots(0);
		}
	};
  const four = () => {
		setDots(4);
		if (dots === 4) {
			setDots(0);
		}
	};
  const five = () => {
		setDots(5);
		if (dots === 5) {
			setDots(0);
		}
	};
  const six = () => {
		setDots(6);
		if (dots === 6) {
			setDots(0);
		}
	};
  const seven = () => {
		setDots(7);
		if (dots === 7) {
			setDots(0);
		}
	};
	return (
		<>
			<h1 style={{ paddingLeft: ".8rem" }}>FOLDERS</h1>
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "2rem",
					boxSizing: "border-box",
				}}
				className="sidebar-inner">
				<div
					style={{
						position: "relative",
						transition: "all .5s",
						cursor: "pointer",
						color: "white",
						background: "rgb(1, 175, 238)"
					}}
					className="Sbox">
					{dots === 1 && (
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "3rem",
								width: "8rem",
								height: "1.5rme",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								background: "white",
								borderRadius: ".5rem",
							}}>
							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Edit</h6>

							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Delete</h6>
						</div>
					)}
					<div
						onClick={first}
						style={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
							width: "3rem",
							height: "1.5rme",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							background: "white",
							borderRadius: ".5rem",
						}}
						className="dot">
						<BsThreeDots color="skyblue" size={30} />
					</div>
					<div>
						<div >
              <AiFillFolderOpen size={40}/>
            </div>
						<div className="sHead">My Folder</div>
						<div className="sDes">created on Jun 23, 2020</div>
					</div>
				</div>
        <div
					style={{
						position: "relative",
						transition: "all .5s",
						cursor: "pointer",
					}}
					className="Sbox">
					{dots === 2 && (
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "3rem",
								width: "8rem",
								height: "1.5rme",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								background: "white",
								borderRadius: ".5rem",
							}}>
							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Edit</h6>

							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Delete</h6>
						</div>
					)}
					<div
						onClick={second}
						style={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
							width: "3rem",
							height: "1.5rme",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							background: "white",
							borderRadius: ".5rem",
						}}
						className="dot">
						<BsThreeDots color="skyblue" size={30} />
					</div>
					<div>
						<div >
              <AiFillFolderOpen size={40}/>
            </div>
						<div className="sHead">Other Folder</div>
						<div className="sDes">created on Jun 23, 2020</div>
					</div>
				</div>
        <div
					style={{
						position: "relative",
						transition: "all .5s",
						cursor: "pointer",
					}}
					className="Sbox">
					{dots === 3 && (
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "3rem",
								width: "8rem",
								height: "1.5rme",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								background: "white",
								borderRadius: ".5rem",
							}}>
							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Edit</h6>

							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Delete</h6>
						</div>
					)}
					<div
						onClick={three}
						style={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
							width: "3rem",
							height: "1.5rme",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							background: "white",
							borderRadius: ".5rem",
						}}
						className="dot">
						<BsThreeDots color="skyblue" size={30} />
					</div>
					<div>
						<div >
              <AiFillFolderOpen size={40}/>
            </div>
						<div className="sHead">Other Folder</div>
						<div className="sDes">created on Jun 23, 2020</div>
					</div>
				</div>
        <div
					style={{
						position: "relative",
						transition: "all .5s",
						cursor: "pointer",
					}}
					className="Sbox">
					{dots === 4 && (
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "3rem",
								width: "8rem",
								height: "1.5rme",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								background: "white",
								borderRadius: ".5rem",
							}}>
							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Edit</h6>

							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Delete</h6>
						</div>
					)}
					<div
						onClick={four}
						style={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
							width: "3rem",
							height: "1.5rme",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							background: "white",
							borderRadius: ".5rem",
						}}
						className="dot">
						<BsThreeDots color="skyblue" size={30} />
					</div>
					<div>
						<div >
              <AiFillFolderOpen size={40}/>
            </div>
						<div className="sHead">Other Folder</div>
						<div className="sDes">created on Jun 23, 2020</div>
					</div>
				</div>
        <div
					style={{
						position: "relative",
						transition: "all .5s",
						cursor: "pointer",
					}}
					className="Sbox">
					{dots === 5 && (
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "3rem",
								width: "8rem",
								height: "1.5rme",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								background: "white",
								borderRadius: ".5rem",
							}}>
							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Edit</h6>

							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Delete</h6>
						</div>
					)}
					<div
						onClick={five}
						style={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
							width: "3rem",
							height: "1.5rme",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							background: "white",
							borderRadius: ".5rem",
						}}
						className="dot">
						<BsThreeDots color="skyblue" size={30} />
					</div>
					<div>
						<div >
              <AiFillFolderOpen size={40}/>
            </div>
						<div className="sHead">Other Folder</div>
						<div className="sDes">created on Jun 23, 2020</div>
					</div>
				</div>
        <div
					style={{
						position: "relative",
						transition: "all .5s",
						cursor: "pointer",
					}}
					className="Sbox">
					{dots === 6 && (
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "3rem",
								width: "8rem",
								height: "1.5rme",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								background: "white",
								borderRadius: ".5rem",
							}}>
							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Edit</h6>

							<h6 style={{ fontSize: "1rem", background: "white", color:"black" }}>Delete</h6>
						</div>
					)}
					<div
						onClick={six}
						style={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
							width: "3rem",
							height: "1.5rme",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							background: "white",
							borderRadius: ".5rem",
						}}
						className="dot">
						<BsThreeDots color="skyblue" size={30} />
					</div>
					<div>
						<div >
              <AiFillFolderOpen size={40}/>
            </div>
						<div className="sHead">Other Folder</div>
						<div className="sDes">created on Jun 23, 2020</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
