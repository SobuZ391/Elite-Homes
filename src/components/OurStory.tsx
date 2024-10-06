import Image from "next/image";
import { Button } from "./ui/button";

export function OurStory(){
    return <div className="container mx-auto pt-20 pb-36 grid lg:grid-cols-2 gap-10">
        <div>
            <div className="relative h-fit w-fit ">
                <Image src="/home.jpg"
                alt="a picture of room"
                width={400}
                height={400}
                className="object-cover"/>
                <Image src="/image-2.jpg"
                alt="a picture of room"
                width={250}
                height={250}
                className="object-cover absolute top-1/2 left-1/2 border-4 lg:block hidden   "/>
            </div>
        </div>
        <div>
            <div>
                <p className="text-primary font-semibold mb-1">Our Story</p>
                <p className="text-3xl mb-2">Efficiency. Transparency. Control</p>
                <p className="text-muted-foreground mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ex consectetur repellendus temporibus asperiores voluptate aliquid eveniet similique, distinctio voluptatum in nemo nesciunt, repudiandae nulla quia accusantium impedit, dolore doloremque voluptates autem fugiat? Molestias rerum eos, in, itaque magni facere at numquam eius similique ullam dolores culpa voluptatem.</p>
                <Button> Read More</Button>
            </div>
        </div>
    </div>
}