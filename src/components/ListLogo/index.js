import { Logos } from '../../router';

const ListLogo = () => {
	return (
		<div className="flex">
			{Logos.map((item, index) => {
				const Icon = item.component;
				return (
					<a
						href={item.link}
						className="block border-[#333] rounded-[25px] m-2 bg-white hover:animate-icon-spin hover:border-slate-400">
						<Icon />
					</a>
				);
			})}
		</div>
	);
};
export default ListLogo;
