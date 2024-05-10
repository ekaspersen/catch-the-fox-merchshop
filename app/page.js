import Link from "next/link";
import Contact from "./components/contact";
import ArtistContainer from "./components/artistCard";
import Image from "next/image";
export default function Home() {
    return (
        <main>
            <section className="grid h-fit min-h-screen place-items-center bg-hero-image bg-cover bg-bottom md:bg-hero-image-big">
                <div className="flex flex-col text-4xl font-black md:text-5xl">
                    <h1>CATCH THE FOX</h1>
                    <span className="relative">
                        CATCH THE FOX
                        <span className="absolute left-0 top-0 italic text-clrprimary">
                            CATCH THE FOX
                        </span>
                    </span>
                    <span>CATCH THE FOX</span>
                    <span>CATCH THE FOX</span>
                    <span className="mx-auto mt-8 text-xs opacity-60">
                        SCROLL ON !
                    </span>
                </div>
                <div className="fixed bottom-[-20px] right-0 z-50 w-full max-w-[800px] bg-clrprimary px-2 pt-2 lg:pb-2">
                    <iframe
                        src="https://open.spotify.com/embed/track/7hcpf4fgMXaUKoSzgnJzfL?utm_source=generator&theme=0"
                        width="100%"
                        height="100"
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            <section className="mx-auto flex min-h-screen max-w-7xl flex-col lg:h-screen lg:flex-row-reverse lg:justify-center">
                <div className="flex flex-col items-center gap-8 px-8 py-16 text-center">
                    <div className="flex-col">
                        <h2 className="text-5xl font-black text-clrprimary">
                            MERCH SHOP
                        </h2>
                        <span className="text-2xl font-black">
                            CATCH THE FOX
                        </span>
                    </div>
                    <p className="max-w-[326px] text-xs font-bold sm:max-w-none">
                        Støtt Catch the fox gjennom merch-shoppen vår. <br />
                        Det er ikke smart å vente for lenge! Når lageret er tomt
                        er lageret tomt.
                    </p>
                    <span className="font-black opacity-60">
                        Forrige batch gikk på en dag!
                    </span>
                    <Link
                        href="/shop"
                        className="relative max-w-fit bg-clrprimary px-8 py-4 font-bold"
                    >
                        SE UTVALG
                        <div className="absolute bottom-[-6px] left-[6px] right-[-6px] top-[6px] z-[-1] bg-clrtertiary"></div>
                    </Link>
                </div>
                <div className="flex h-full flex-col lg:flex-col-reverse">
                    <div className="flex lg:flex-1">
                        <div className="grid flex-1 place-items-center bg-clrprimary py-8">
                            <Image
                                className="max-w-[80%]"
                                src="/ctf-graphic-shop.png"
                                alt="graphic ctf"
                                width={252}
                                height={308}
                            />
                        </div>
                        <div className="grid flex-1 place-items-center">
                            <Image
                                className="max-w-[80%]"
                                src="/white-t-fox.png"
                                alt="Mirage Fox t-shirt"
                                width={569}
                                height={569}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-clrprimary p-4 pt-16 text-right text-3xl font-black italic lg:flex-1 lg:text-5xl">
                        <span>CATCH THE FOX</span>
                        <span>LIMITED OFFER</span>
                        <span>CATCH THE FOX</span>
                        <span>LIMITED OFFER</span>
                        <span>CATCH THE FOX</span>
                    </div>
                </div>
            </section>
            <section>
                <div
                    id="aboutus"
                    className="mx-auto flex max-w-7xl flex-col gap-8 bg-clrprimary px-4 py-16 md:gap-16"
                >
                    <h2 className="w-fit skew-y-[2deg] bg-clrdark bg-opacity-20 px-8 py-2 text-4xl font-black text-clrwhite md:text-5xl ">
                        OM OSS
                    </h2>

                    <div className="flex max-w-3xl flex-col gap-4 font-medium text-clrdark lg:text-xl">
                        <p className="font-bold text-clrtertiary">
                            La oss introdusere Catch the Fox, det nye
                            Rockebandet fra Nord-Norge med stor R. Fra
                            oppstarten i 2022 har bandet hatt en rask og
                            spennende utvikling. Allerede har vi spilt mange
                            konserter rundt om i Oslo og litt i Bodø.
                        </p>
                        <p>
                            I 2023 ble de vinnere av den norske finalen i
                            Emergenza-festivalen og reiste ned til Taubertal
                            Festival for å representere Norge i den store
                            internasjonale finalen i Tyskland. Helga etter satte
                            de publikumsrekord på skogenscena under
                            Parkenfestivalen.
                        </p>
                        <p>
                            Nå har de kommet seg til årets Norgesfinale i
                            Emergenza som holdes på
                            <span className="font-bold italic">
                                {" "}
                                Rockefeller i Oslo 18. mai.{" "}
                            </span>
                            Klarer de å vinne igjen?
                        </p>
                    </div>
                    <ArtistContainer />
                </div>
            </section>
            <Contact />
        </main>
    );
}
