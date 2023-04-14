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
import { BsTrash3Fill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillFolder } from "react-icons/ai";
import {CgClose} from "react-icons/cg"

const Home = () => {
	const [dots, setDots] = useState<number>(0);
	const [pages, setPages] = useState<number>(1);
	const [fold, setFold] = useState<string>("1");
	const handleFold = () => {
		setFold("2");
		if (fold === "2") {
			setFold("1");
		}
	};
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
	const pageOne = ()=>{
		setPages(1)
		setFold("1")
	}
	const pageTwo = ()=>{
		setPages(2)
		setFold("1")
	}
	const pageThree = ()=>{
		setPages(3)
		setFold("1")
	}
	const pageFour = ()=>{
		setPages(4)
		setFold("1")
	}
	const pageFive = ()=>{
		setPages(5)
		setFold("1")
	}
	const pageSix = ()=>{
		setPages(6)
		setFold("1")
	}
	return (
		<>
			{fold === "2" && (
				<div
					style={{
						width: "100%",
						height: "100vh",
						position: "absolute",
						left: "0",
						top: "0",
					}}
					className="over"></div>
			)}
			<div
				onClick={handleFold}
				style={{ position: "absolute", cursor: "pointer" }}
				className="menu">
				<CgMenuGridO size={30} />
			</div>
			{fold == "2" && (
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className={`card`}>
					<div className="folderP">
						<span onClick={(()=>setFold("1"))} className="close"> <CgClose size={26}  / > </span>
						<div onClick={pageOne}>
							{" "}
							<AiFillFolder size={30} /> Folder-1
						</div>
						<div onClick={pageTwo}>
							{" "}
							<AiFillFolder size={30} /> Folder-2
						</div>
						<div onClick={pageThree}>
							{" "}
							<AiFillFolder size={30} /> Folder-3
						</div>
						<div onClick={pageFour}>
							{" "}
							<AiFillFolder size={30} /> Folder-4
						</div>
						<div onClick={pageFive} >
							{" "}
							<AiFillFolder size={30} /> Folder-5
						</div>
						<div onClick={pageSix}>
							{" "}
							<AiFillFolder size={30} /> Folder-6
						</div>
					</div>
				</motion.div>
			)}
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
									background: `${pages == 1 ? "#74d5ff" : "white"}`,
									color: `${pages == 1 ? "white" : "black"}`,
								}}
								className="Sbox">
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
									<div style={{width:"full", justifyContent:"center", display:"flex" }}>
										<AiFillFolderOpen size={40} />
									</div>
									<div style={{textAlign:"center", marginTop:".6rem" }} className="sHead">My Folder</div>
									<div style={{textAlign:"center"}} className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(2)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 2 ? "#74d5ff" : "white"}`,
									color: `${pages == 2 ? "white" : "black"}`,
								}}
								className="Sbox">
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
									<div style={{width:"full", justifyContent:"center", display:"flex" }}>
										<AiFillFolderOpen size={40} />
									</div>
									<div style={{textAlign:"center", marginTop:".6rem" }} className="sHead">Other Folder</div>
									<div style={{textAlign:"center"}} className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(3)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 3 ? "#74d5ff" : "white"}`,
									color: `${pages == 3 ? "white" : "black"}`,
								}}
								className="Sbox">
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
									<div style={{width:"full", justifyContent:"center", display:"flex" }}>
										<AiFillFolderOpen size={40} />
									</div>
									<div style={{textAlign:"center", marginTop:".6rem" }} className="sHead">Other Folder</div>
									<div style={{textAlign:"center"}} className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(4)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 4 ? "#74d5ff" : "white"}`,
									color: `${pages == 4 ? "white" : "black"}`,
								}}
								className="Sbox">
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
									<div style={{width:"full", justifyContent:"center", display:"flex" }}>
										<AiFillFolderOpen size={40} />
									</div>
									<div style={{textAlign:"center", marginTop:".6rem" }} className="sHead">Other Folder</div>
									<div style={{textAlign:"center"}} className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(5)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 5 ? "#74d5ff" : "white"}`,
									color: `${pages == 5 ? "white" : "black"}`,
								}}
								className="Sbox">
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
									<div style={{width:"full", justifyContent:"center", display:"flex" }}>
										<AiFillFolderOpen size={40} />
									</div>
									<div style={{textAlign:"center", marginTop:".6rem" }} className="sHead">Other Folder</div>
									<div style={{textAlign:"center"}} className="sDes">created on Jun 23, 2020</div>
								</div>
							</div>
							<div
								onClick={() => setPages(6)}
								style={{
									position: "relative",
									transition: "all .5s",
									cursor: "pointer",
									background: `${pages == 6 ? "#74d5ff" : "white"}`,
									color: `${pages == 6 ? "white" : "black"}`,
								}}
								className="Sbox">
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
									<div style={{width:"full", justifyContent:"center", display:"flex" }}>
										<AiFillFolderOpen size={40} />
									</div>
									<div style={{textAlign:"center", marginTop:".6rem" }} className="sHead">Other Folder</div>
									<div style={{textAlign:"center"}} className="sDes">created on Jun 23, 2020</div>
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
