import { useEffect } from "react";
import ItemRental from "../../components/ItemRental";
import useWhitelist from "../../hooks/useWhitelist";
import Sidebar from "../../components/Sidebar";

function NewSaved() {
	const { whitelist } = useWhitelist();
	useEffect(() => {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	}, []);
	return (
		<div className="w-5xl mx-auto max-w-[100%] my-4">
			<h2 className="text-[20px] font-medium">Tin đã lưu</h2>
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-8 flex flex-col gap-4 mt-4">
					{whitelist.length > 0 ? (
						whitelist.map((post) => (
							<ItemRental
								key={post.id}
								post={post}
								isInWhitelist={true}
							/>
						))
					) : (
						<div className="text-xl text-center bg-red-400 rounded-xl border-redColor text-white font-medium p-8">
							Bạn chưa lưu tin nào
						</div>
					)}
				</div>
				<div className="col-span-4">
					<Sidebar isShowFilter={false} />
				</div>
			</div>
		</div>
	);
}

export default NewSaved;
