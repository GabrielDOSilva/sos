import { DetailTools, ListingTools } from "../../shrades/components";
import { BaseLayout } from "../../shrades/layouts";



export const Home = () => {
    return (
        <BaseLayout
            titulo='Home page'
            barraDeFerramentas={(
                <DetailTools />
            )}>
            Testando
        </BaseLayout>
    );
};