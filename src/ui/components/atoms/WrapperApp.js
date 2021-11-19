export default function WrapperApp(props) {
    return (
        <div class="bg-yellow-100 h-full">
            <nav class="p-4 bg-gray-800 fixed top-0 inset-x-0 z-50 h-16">
                <h1 class="text-center text-white text-2xl font-bold capitalize">
                    College Offers
                </h1>
            </nav>
            <div class="text-blue-600 mt-32">
                {props.children}
            </div>
        </div>
    );
}
