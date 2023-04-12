/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const onclick = () => {
		setOpen(!open);
	};
	const router = useRouter();
	return (
		<>
			<div style={{}} className="a">
				<nav className="flex w-[100%]  items-center justify-between">
					{/* Close btn */}
					<div
						onClick={onclick}
						style={{ position: "absolute", top: "18px", right: "8px" }}
						className="">
						{open ? (
							<div className="">
								{" "}
								<IoMdClose size={31} color="#375f6b" />
							</div>
						) : (
							<FiMenu size={31} color="#375f6b" />
						)}
					</div>
					{/* Navbar */}
					<div
						style={{
							position: "absolute",
							display: "flex",
							flexDirection: "column",
							gap: "3rem",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "1.5rem",
							transition: "all .8s",
							background: "black",
							width: "100%",
							color: "white",
							height: "100vh",
							top: "0",
						}}
						className={` 
						${open ? "left-0" : "left-back"} x`}>
						<div
							onClick={onclick}
							style={{ position: "absolute", top: "18px", right: "8px" }}>
							{open ? <IoMdClose color="#ffffff" size={31} /> : ""}
						</div>
						<Link
							style={{ textDecoration: "none", color: "white" }}
							className={
								router.pathname == "/"
									? " rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium "
							}
							href={"/"}>
							My Folder
						</Link>{" "}
						<Link
							style={{ textDecoration: "none", color: "white" }}
							className={
								router.pathname == "/contact"
									? " rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium"
							}
							href={"/"}>
							Other Folder
						</Link>
						<Link
							style={{ textDecoration: "none", color: "white" }}
							className={
								router.pathname == "/faq"
									? " rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium"
							}
							href={"/"}>
							Other Folder
						</Link>{" "}
						<Link
							style={{ textDecoration: "none", color: "white" }}
							className={
								router.pathname == "/about"
									? " rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium"
							}
							href={"/"}>
							Other Folder
						</Link>{" "}
					</div>
					{/* Cart */}
				</nav>
			</div>
		</>
	);
};
export default Navbar;
