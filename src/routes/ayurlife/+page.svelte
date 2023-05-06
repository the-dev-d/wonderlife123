<script>
  import HoverBox from "./../../components/HoverBox.svelte";
  import Banner from "../../components/Banner.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import logo from "/src/lib/assets/ayur-life.png";
  import background from "/src/lib/assets/ayurplant.png";
  import VideoTile from "../../components/VideoTile.svelte";
  import ContactForm from "../../components/ContactForm.svelte";
  import Footer from "../../components/Footer.svelte";
  import Icon from "../../components/Icon.svelte";

  const videos = [
    "rmPp_P_Gqhw",
    "rymjDBm_EQU",
    "P-jKtzUuVcM",
    "1YFR20MmvpM",
    "9pH9NI8Fubs",
  ];
</script>

<div>
  <main class="w-full h-[70vh] md:h-[90vh]">
    <Banner>
      <div class="flex w-full h-full" slot="background">
        <img
          class="object-cover w-full h-full lg:w-2/3 brightness-75"
          src="/src/lib/assets/ayurplant.png"
          alt=""
        />
        <img
          class="hidden object-cover w-1/3 h-full lg:block brightness-75"
          src="/src/lib/assets/ayurmix.png"
          alt=""
        />
      </div>
      <div slot="foreground" class="grid content-center h-full px-6 md:w-1/2">
        <h3 class="text-xl text-white md:text-5xl">nunc id cursus metus</h3>
        <h5 class="my-3 text-lg text-gray-200 md:text-xl">
          massa enim nunc mattis enim ut
        </h5>
        <div class="grid gap-6 my-6 w-fit md:flex md:w-full">
          <button
            class="p-3 font-semibold text-white transition-all border-2 md:text-lg hover:text-ayur-primary hover:bg-lime-50 border-ayur-primary bg-ayur-primary"
            >Get Started</button
          >
          <button
            class="p-3 font-semibold text-white transition-all border-2 md:text-lg hover:text-ayur-primary backdrop-blur-sm border-ayur-primary"
            >Know More</button
          >
        </div>
      </div>
      <Navbar slot="header" {logo} title="AYUR LIFE">
        <ul
          slot="options"
          class="flex items-center justify-center gap-5 font-semibold"
        >
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
        </ul>
      </Navbar>
    </Banner>
  </main>

  <!-- description  -->
  <section class="container grid py-6 mx-auto my-10 place-items-center">
    <div class="w-full py-6 mx-auto lg:w-2/3">
      <h3 class="w-full mb-6 text-3xl font-semibold text-center">Ayur Life</h3>
      <p class="m-6 text-center font-calligraffi">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus
        sem est, a faucibus orci aliquet a. Praesent ultrices nibh vel orci
        semper varius. Ut varius, diam eu vestibulum lacinia, eros libero
        gravida odio, vel venenatis ipsum nunc quis nulla. Nulla ac libero vitae
        felis
      </p>
    </div>
  </section>

  <!-- the hover tiles  -->
  <section class="container mx-auto my-10 mb-20">
    <h4
      class="w-1/2 p-1 mx-auto my-8 text-xl font-semibold text-center border-b-4 md:text-3xl border-ayur-primary text-ayur-primary"
    >
      The Wonder Life Family
    </h4>
    <div class="flex w-full gap-2 p-3 md:mx-auto md:w-2/3">
      <HoverBox
        image="/src/lib/assets/ayurmix.png"
        beforeText="1"
        afterText="Ayur Life"
      />
      <HoverBox
        image="/src/lib/assets/ayurmix.png"
        beforeText="2"
        afterText="Placeholder"
      />
      <HoverBox
        image="/src/lib/assets/ayurmix.png"
        beforeText="3"
        afterText="Placeholder"
      />
    </div>
  </section>

  <section class="relative w-full">
    <Banner>
      <div class="w-full h-full bg-gray-900" slot="background">
        <img
          class="object-cover w-full h-full"
          src="/src/lib/assets/plant.png"
          alt=""
        />
      </div>
      <div
        slot="foreground"
        class="flex flex-col justify-center w-full h-full p-6 py-20 text-white"
      >
        <div class="container w-full mx-auto my-16 md:px-10">
          <h2 class="text-2xl font-semibold border-b-2 md:text-4xl">
            Who are we ?
          </h2>
          <div class="w-full mt-20 lg:w-1/2">
            <h3
              class="text-2xl font-semibold text-center lg:text-left lg:text-3xl"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p class="mt-10 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero est
              maxime, numquam adipisci totam quia quam nesciunt deleniti iure
              blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deserunt assumenda nemo quo eligendi! Porro, facilis tempora
              quaerat repellat temporibus sunt est itaque, quis nisi illum
              dolorum soluta, a aperiam quos. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Molestias facere consequuntur
              suscipit tempora cupiditate doloremque architecto laborum!
              Explicabo officia voluptatibus dolores repudiandae iure. Nisi
              possimus modi placeat eius, voluptates inventore!
            </p>
          </div>
        </div>
      </div>
    </Banner>
  </section>
  <section class="p-3 mx-auto my-14 lg:container">
    <div
      class="w-full px-6 py-6 border-2 rounded-md shadow-md bg-opacity-70 bg-ayur-primary"
    >
      <h3 class="m-6 text-3xl font-semibold text-left text-white border-b-2">
        Discover More
      </h3>
      <VideoTile primaryVideo={videos[0]} videos={videos.slice(1, 5)} />
    </div>
  </section>
  <section class="container p-6 mx-auto my-10">
    <div class="w-full">
      <h3
        class="my-8 text-3xl font-bold border-b-2 border-ayur-primary text-ayur-primary"
      >
        Reach us
      </h3>
      <ContactForm>
        <span slot="head">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
        </span>
        <div slot="body">
          <Icon
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          >
            <i class="fa-solid fa-location-dot" />
          </Icon>
          <Icon label="+91 2777-888-888">
            <i class="fa-solid fa-mobile-screen-button" />
          </Icon>
          <Icon label="ayur-contact@wonderlife123.com">
            <i class="fa-solid fa-envelope" />
          </Icon>
        </div>
        <div slot="foot">
          <h3>Follow us</h3>
          <div class="flex">
            <Icon>
              <i class="fa-brands fa-facebook" />
            </Icon>
            <Icon>
              <i class="fa-brands fa-youtube" />
            </Icon>
            <Icon>
              <i class="fa-brands fa-instagram" />
            </Icon>
          </div>
        </div>
      </ContactForm>
    </div>
  </section>
  <section>
    <Footer>
      <div class="grid w-full gap-20 m-3 mb-6 md:flex">
        <div class="w-full">
          <h3 class="my-6 text-2xl font-semibold">Ayur Life</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteturHome adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            id interdum velit laoreet id. Scelerisque varius morbi enim nunc.
            Pellentesque diam volutpat commodo rhoncus aenean vel elit
            scelerisque mauris pellentesque pulvinar.
          </p>
        </div>
        <div class="w-full">
          <h3 class="my-6 text-2xl font-semibold">Quick Links</h3>
          <ul class="grid gap-3 list-none">
            <li>Home</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
          </ul>
        </div>
      </div>
    </Footer>
  </section>
</div>
