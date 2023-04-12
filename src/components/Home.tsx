import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { AiFillFolderOpen } from "react-icons/ai";
import Folder_01 from "./Folder_01";
import Folder_02 from "./Folder_02";
import Folder_05 from "./Folder_05";
import Folder_06 from "./Folder_06";
import Folder_04 from "./Folder_04";
import Folder_03 from "./Folder_03";
import { motion } from "framer-motion";

const Home = () => {
	const [dots, setDots] = useState<number>(0);
	const [pages, setPages] = useState<number>(1);
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
			<div className="a">
				<Navbar />
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "end",
					height: "100%",
				}}>
				{/* Sidebar */}
				<div
					style={{
						background: "rgb(230, 247, 254)",
						height: "100vh",
						overflowY: "scroll",
						position: "fixed",
						left: "0",
					}}
					className="sidebar">
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
								paddingBottom: "5rem",
							}}
							className="sidebar-inner">
							<div
								onClick={() => setPages(1)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 1 ? "rgb(1, 175, 238)" : "white"}`,
								}}
								className="Sbox">
								{dots === 1 && (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: .5 }}
										style={{
											position: "absolute",
											top: ".2rem",
											right: "3rem",
											width: "8rem",
											height: "2rme",
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
											background: "white",
											borderRadius: "1rem",
											
										}}
										className="shad">
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
									</motion.div>
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
										<AiFillFolderOpen size={40} />
									</div>
									<div className="sHead">My Folder</div>
									<div className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(2)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 2 ? "rgb(1, 175, 238)" : "white"}`,
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
										<AiFillFolderOpen size={40} />
									</div>
									<div className="sHead">Other Folder</div>
									<div className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(3)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 3 ? "rgb(1, 175, 238)" : "white"}`,
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
										<AiFillFolderOpen size={40} />
									</div>
									<div className="sHead">Other Folder</div>
									<div className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(4)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 4 ? "rgb(1, 175, 238)" : "white"}`,
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
										<AiFillFolderOpen size={40} />
									</div>
									<div className="sHead">Other Folder</div>
									<div className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(5)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 5 ? "rgb(1, 175, 238)" : "white"}`,
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
										<AiFillFolderOpen size={40} />
									</div>
									<div className="sHead">Other Folder</div>
									<div className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(6)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 6 ? "rgb(1, 175, 238)" : "white"}`,
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
										<AiFillFolderOpen size={40} />
									</div>
									<div className="sHead">Other Folder</div>
									<div className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
						</div>
					</>
				</div>
				{/* Pages */}
				<div className="d">
					{pages == 1 && <Folder_01 />}
					{pages == 2 && <Folder_02 />}
					{pages == 3 && <Folder_03 />}
					{pages == 4 && <Folder_04 />}
					{pages == 5 && <Folder_05 />}
					{pages == 6 && <Folder_06 />}
				</div>
			</div>
		</>
	);
};

export default Home;
