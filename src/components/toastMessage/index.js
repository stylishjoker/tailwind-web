import { useSelector } from 'react-redux';
import { toastSelector } from '../../app/store';

const ToastMessage = () => {
	const message = useSelector(toastSelector);
	console.log(message);
	const type = {
		update: 'border-sky-500 bg-teal-300',
		susses: 'border-emerald-500 bg-lime-300',
		warning: 'border-yellow-500 bg-amber-300',
		error: 'border-red-500 bg-red-300',
	};
	return (
		<div
			className={`fixed shadow-2xl z-50 top-[30%] right-0 bg-[red] min-w-[250px] min-h-[50px] pl-[10px] rounded-md border-[2px] `}>
			<span>ToastMessage</span>
		</div>
	);
};
export default ToastMessage;
