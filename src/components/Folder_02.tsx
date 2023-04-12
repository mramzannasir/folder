import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { motion } from "framer-motion";

const Folder_02 = () => {
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
	const third = () => {
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
	const eight = () => {
		setDots(8);
		if (dots === 8) {
			setDots(0);
		}
	};
	const nine = () => {
		setDots(9);
		if (dots === 9) {
			setDots(0);
		}
	};
	const ten = () => {
		setDots(10);
		if (dots === 10) {
			setDots(0);
		}
	};
	const eleven = () => {
		setDots(11);
		if (dots === 11) {
			setDots(0);
		}
	};
	const twelve = () => {
		setDots(12);
		if (dots === 12) {
			setDots(0);
		}
	};
	return (
		<>
			<div className="page-side">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<h1 style={{ marginLeft: "1rem" }}>FILES</h1>
					<div className="add">
						<div className="upload-btn-wrapper ">
							<button className="btn">
								<IoAddOutline color="#375f6b" size={35} />
							</button>
							<input
								style={{ width: "100%" }}
								className=" b"
								type="file"
								name="myfile"
							/>
						</div>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="boxP">
					<div style={{}} className="box">
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
							</div>
						)}
						<div
							onClick={third}
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 7 && (
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
							</div>
						)}
						<div
							onClick={seven}
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 8 && (
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
							</div>
						)}
						<div
							onClick={eight}
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 9 && (
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
							</div>
						)}
						<div
							onClick={nine}
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 10 && (
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
							</div>
						)}
						<div
							onClick={ten}
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 11 && (
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
							</div>
						)}
						<div
							onClick={eleven}
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 12 && (
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
								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Edit
								</h6>

								<h6
									style={{
										fontSize: "1rem",
										background: "white",
										color: "black",
									}}>
									Delete
								</h6>
							</div>
						)}
						<div
							onClick={twelve}
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
							<div>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div className="Head">New.pdf</div>
							<div className="sDes">created on Jun 23, 2020</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Folder_02;