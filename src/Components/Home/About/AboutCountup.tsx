import { FaCameraRetro } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { HiPhoto } from "react-icons/hi2";
import CountUp from "react-countup";
const AboutCountup = () => {
	return (
		<div className="flex flex-col space-y-6  gap-3 lg:gap-0 items-baseline justify-center lg:h-[100%]">
			<StatItem
				icon={<FaCameraRetro className="w-12 h-12 text-primary_purple " />}
				count={130000}
				label="Amazing Shots"
			/>
			<StatItem
				icon={<MdEvent className="w-12 h-12 text-primary_purple" />}
				count={200}
				label="Events"
			/>
			<StatItem
				icon={<HiPhoto className="w-12 h-12 text-primary_purple" />}
				count={90000}
				label="Printed Photos"
			/>
		</div>
	);
};
interface propstype{
	icon: React.ReactNode,
	count: Number,
	label: string,

}
const StatItem = ({ icon, count, label }:propstype) => {
	return (
		<div className="flex items-center space-x-4">
			<div>{icon}</div>
			<div>
				<p className="text-4xl font-bold text-primary_purple"><CountUp end={count as number} duration={6} delay={2}/>+</p>
				<p className="text-lg text-gray-600">{label}</p>
			</div>
		</div>
	);
};


export default AboutCountup;
