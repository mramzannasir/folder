import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";

const Home = () => {
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
			<div className="a">
				<Navbar />
			</div>
			<div style={{ width: "100%", display: "flex", height: "100%" }}>
				<div
					style={{
						background: "rgb(230, 247, 254)",
						height: "100vh",
						overflowY: "scroll",
					}}
					className="sidebar">
					<Sidebar />
				</div>
				<div className="page-side">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<h1>FILES</h1>
						<div className="add">
							<IoAddOutline color="#375f6b" size={35} />
						</div>
					</div>
					<div className="boxP">
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						<div style={{position:"relative"}} className="box">
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
						
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
