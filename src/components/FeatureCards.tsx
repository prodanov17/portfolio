import * as React from "react";
import { BoltIcon, PhoneIcon, MonitorIcon, PencilIcon, ServerIcon } from "../assets/icons";

interface Props {
    icon: string;
    title: string;
    desc: string;
    className: string;
}

const FeatureCards = ({ icon, title, desc, className }: Props) => {
    const Components: any = {
        bolt: BoltIcon,
        phone: PhoneIcon,
        monitor: MonitorIcon,
        pencil: PencilIcon,
        server: ServerIcon,
    };
    return (
        <div
            className={`h-40 w-min min-w-[190px]  sm:min-w-[210px] mt-8 pattern rounded-xl relative group ${className}`}
        >
            <div className="dots min-w-[190px] sm:min-w-[210px] w-min h-full text-neutral-200">
                <div className="absolute bottom-4 left-4 group-hover:-translate-y-[140%] transition-transform duration-500">
                    {React.createElement(Components[icon])}
                    <p className="mt-2">{title}</p>
                    <p className="text-neutral-500 w-max max-w-[160px] sm:max-w-[180px] text-sm opacity-0 mt-4 absolute group-hover:opacity-100 group-hover:delay-[400ms] transition-opacity">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCards;
