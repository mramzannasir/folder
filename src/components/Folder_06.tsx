import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BsCloudUpload } from "react-icons/bs";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { motion } from "framer-motion";
import { BsTrash3Fill } from "react-icons/bs";

const Folder_06 = () => {
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
			<div className="page-side">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						position: "relative",
					}}>
					<h1 style={{ marginLeft: "1rem" }}>FILES</h1>
					<div style={{ cursor: "pointer" }} className="add">
						<div className="upload-btn-wrapper">
							<button
								style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
								className="btn">
								<BsCloudUpload color="#375f6b" size={20} /> Upload File
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
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 2 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 3 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 4 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 5 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 6 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 7 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 8 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 9 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 10 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 11 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{ textAlign: "center" }} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
					<div style={{ position: "relative" }} className="box">
						{dots === 12 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								style={{
									position: "absolute",
									top: "2.9rem",
									right: "1rem",
									width: "6rem",
									height: "2.5rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									background: "white",
									borderRadius: ".3rem",
								}}
								className="shad">
								<div className="Delete">
									<BsTrash3Fill />
									<p>Delete</p>{" "}
								</div>
							</motion.div>
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
							<div
								style={{
									width: "full",
									display: "flex",
								}}>
								<VscFilePdf size={40} color="#1c3238" />
							</div>
							<div style={{ marginTop: ".6rem" }} className="Head">
								New.pdf
							</div>
							<div style={{}} className="sDes">
								created on Jun 23, 2020
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Folder_06;
