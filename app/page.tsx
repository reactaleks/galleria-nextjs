import NavBar from "@/components/NavBarComponent";
import ImageGallery from "@/components/ImageGalleryComponent";
export default function Home() {
  
  return (
    <>
      <NavBar />
      <main className="min-h-screen ">
        <ImageGallery/>
      </main>
    </>
  );
}
