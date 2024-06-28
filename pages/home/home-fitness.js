import Layout from "@/components/layout/Layout";
import Fitness_Section1 from '@/components/sections/homepage/Fitness/Fitness_Section1';
import Fitness_Section2 from '@/components/sections/homepage/Fitness/Fitness_Section2';
import Fitness_Section3 from '@/components/sections/homepage/Fitness/Fitness_Section3';
import Fitness_Section4 from '@/components/sections/homepage/Fitness/Fitness_Section4';
import Fitness_Section5 from '@/components/sections/homepage/Fitness/Fitness_Section5';
import Fitness_Section6 from '@/components/sections/homepage/Fitness/Fitness_Section6';
import Fitness_Section7 from '@/components/sections/homepage/Fitness/Fitness_Section7';
import Fitness_Section8 from '@/components/sections/homepage/Fitness/Fitness_Section8';
export default function HomeFitness() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Fitness_Section1 />
                <Fitness_Section2 />
                <Fitness_Section3 />
                <Fitness_Section4 />
                <Fitness_Section5 />
                <Fitness_Section6 />
                <Fitness_Section7 />
                <Fitness_Section8 />
            </Layout>

        </>
    )
}
