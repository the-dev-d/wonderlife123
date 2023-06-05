<script lang="ts">
    import HoverBox from "./../components/HoverBox.svelte";
    import Banner from "../components/Banner.svelte";
    import Navbar from "../components/Navbar.svelte";
    import VideoTile from "../components/VideoTile.svelte";
    import ContactForm from "../components/ContactForm.svelte";
    import Footer from "../components/Footer.svelte";
    import Icon from "../components/Icon.svelte";
  
    const videos = [
      "rmPp_P_Gqhw",
      "rymjDBm_EQU",
      "P-jKtzUuVcM",
      "1YFR20MmvpM",
      "9pH9NI8Fubs",
    ];
  </script>
  <svelte:head>
    <title>Wonder Life</title>
    <link rel="icon" href="/ayur/ayur-life.webp" />
  </svelte:head>
  <div class="bg-teal-50">
    <main class="w-full h-[50vh] md:h-[90vh] relative z-10">
      <Banner>
        <div class="relative flex w-full h-full" slot="background">
          <img class="object-cover object-bottom w-1/3 brightness-75" src="/wonder/b1.png" alt="">
          <img class="object-cover object-left w-1/3 brightness-75" src="/wonder/b2.png" alt="">
          <img class="object-cover object-left w-1/3 brightness-75" src="/wonder/b3.png" alt="">
          <div class="absolute w-full h-full bg-teal-300 bg-opacity-5"></div>
        </div>
        <div slot="foreground" class="grid content-center h-full px-6 md:w-1/2">
          <h3 class="text-3xl font-semibold text-white md:text-5xl">Wonder Life 123</h3>
          <h5 class="my-3 text-gray-200 md:text-xl">
            Uniting Ayurveda, Naturopathy and Homeopathy for Holistic Healing
          </h5>
          <div class="grid gap-6 my-6 w-fit md:flex md:w-full">
            <button
              class="p-3 font-semibold text-white transition-all border-2 md:text-lg hover:text-wonder-primary hover:bg-teal-100 border-wonder-primary bg-wonder-primary"
              >Get Started</button
            >
            <button
              class="p-3 font-semibold text-white transition-all border-2 md:text-lg hover:text-wonder-primary backdrop-blur-sm border-wonder-primary"
              >Know More</button
            >
          </div>
        </div>
        <Navbar class="text-wonder-primary" slot="header" logo="" title="WONDER LIFE">
          <ul
            slot="options"
            class="items-center justify-center hidden gap-5 font-semibold md:flex"
          >
            <!-- <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li> -->
          </ul>
        </Navbar>
      </Banner>
    </main>
  
    <!-- description  -->
    <section class="container grid py-6 mx-auto my-10 place-items-center">
      <div class="w-full py-6 mx-auto lg:w-2/3">
        <h3 class="w-full mb-6 text-3xl font-semibold text-center">Wonder Life</h3>
        <p class="mx-6 text-justify lg:text-left font-bree">
            At Wonder Life, we believe that true healing encompasses the physical, mental, and spiritual aspects of an individual.
            By combining the wisdom and practices of these three disciplines: <span class="mx-auto text-lg "><a href="ayurlife"> 1. Ayurveda, </a> <a href="naturelife">2. Naturopathy,</a> <a href="holisticlife">3. Homeopathy.</a> </span> 
        </p> 
        <p class="mx-6 mt-2 text-justify font-bree"> we offer a unique and comprehensive approach to healthcare. 
            Our team of experienced practitioners collaborates seamlessly to provide personalized treatment plans that honor the individual's unique constitution and needs.
        </p>
      </div>
    </section>
  
    <!-- the hover tiles  -->
    <section class="container mx-auto my-10 mb-20">
      <h4
        class="mx-auto my-8 text-3xl font-semibold text-center border-b-2 w-fit border-wonder-primary text-wonder-primary"
      >
        The Wonder Life Family
      </h4>
      <div class="flex w-full gap-2 p-3 md:mx-auto md:w-2/3">
        <a class="w-full" href="ayurlife">
          <HoverBox
          image="wonder/ic1.webp"
          beforeText="1"
          afterText="Ayur Life"
          color="ayur-primary"
        />
        </a>
        <a class="w-full" href="naturelife">
          <HoverBox
          image="wonder/ic2.webp"
          beforeText="2"
          afterText="Nature Life"
          color="nature-primary"
        />
        </a>
        <a class="w-full" href="holisticlife">
          <HoverBox
          image="wonder/ic3.webp"
          beforeText="3"
          afterText="Holistic Life"
          color="holistic-primary"
        />
        </a>
      </div>
    </section>
  
    <section class="relative w-full">
      <Banner>
        <div class="w-full h-full bg-gray-900" slot="background">
          <img
            class="object-cover object-top w-full h-full brightness-[.3]"
            src="/wonder/alternate-meds.webp"
            alt=""
          />
        </div>
        <div
          slot="foreground"
          class="flex flex-col justify-center w-full h-full p-6 py-24 text-white"
        >
          <div class="container w-full mx-auto md:px-10">
            <h2 class="text-2xl font-semibold border-b-2 md:text-4xl">
              Why Wonder Life and Alternate Medicines ?
            </h2>
            <div class="w-full mt-10 lg:w-1/2">
              <p class="my-3 text-lg text-justify lg:text-left">
                The future of alternative medicines is indeed promising, as we are witnessing a transition phase in 
                medicine today. With the emergence of new studies and research, we are gaining a deeper understanding of 
                the benefits and efficacy of various alternative treatment modalities. 
                This knowledge allows us to make more informed choices about our health and well-being.
              </p>
              <p class="my-3 text-lg text-justify lg:text-left">
                One significant achievement in the field of health would be the development and implementation of an 
                integrated treatment plan that combines the strengths of different health treatment systems, 
                including Ayurveda, Naturopathy, and Homeopathy. By integrating these systems, we can harness the unique principles and practices of each to create a comprehensive and personalized approach to healthcare.
                Such an integrated treatment plan holds great potential to revolutionize the way we approach health and wellness.
              </p>
              <p class="my-3 text-lg text-justify lg:text-left">
                As we continue to explore and embrace the possibilities of 
                integrative medicine, we open doors to improved patient outcomes, 
                enhanced well-being, and a shift towards a more patient-centered and 
                comprehensive healthcare system. The future of alternative medicines lies in the collaborative efforts 
                of medical professionals, researchers, and practitioners to integrate different treatment systems, allowing 
                individuals to access a broader range of healing modalities and ultimately 
                improving the quality of healthcare for all.
              </p>
            </div>
          </div>
        </div>
      </Banner>
    </section>
    <!-- <section class="p-3 mx-auto my-14 lg:container">
      <div
        class="w-full px-6 py-6 border-2 rounded-md shadow-md bg-opacity-70 bg-wonder-primary"
      >
        <div class="flex items-end mb-6 text-3xl font-semibold text-left text-white border-b-2">
          <span>Discover</span>
          <span class="ml-auto text-base cursor-pointer group">
            More
            <i class="w-0 transition-all opacity-0 group-hover:w-5 fas fa-angle-double-right group-hover:opacity-100"></i>
          </span>
        </div>
        <VideoTile primaryVideo={videos[0]} videos={videos.slice(1, 5)} />
      </div>
    </section> -->
    <section class="container p-6 mx-auto my-10">
      <h3 class="my-10 text-3xl font-bold border-b-2 border-wonder-primary text-wonder-primary">
          Our Treatment Approach
      </h3>
      <h3 class="my-6 tracking-wide">Our approach of treatment is rooted in the principles of Integrative Medicine</h3>
      <p class="mt-5 text-justify lg:text-left">
        Integrative Medicine focuses on you as a whole person and not just your illness or disease. While it seeks to understand the underlying cause of your symptoms or condition, it does so by looking at your complete mind, body and spirit.  
        Who are the beneficiaries of integrative medicines?
        Many people can benefit from integrative medicines, including healthy people. People with long-lasting (chronic) or complex conditions may especially find the approach helpful. Integrative medicine can help you find relief for many health and medical conditions, including:
      </p>
      <ul class="my-3 font-semibold list-disc list-inside marker:text-wonder-primary text-slate-600">
        <li> Autoimmune diseases. </li>
        <li> Acute and chronic pain. </li>
        <li> Breathing disorders. </li>
        <li> Headaches and migraines. </li>
        <li> Cancer and related side effects. </li>
        <li> Chronic fatigue. </li>
        <li> Cold/flu symptoms. </li>
        <li> Digestive disorders. </li>
        <li> Infertility. </li>
        <li> Menopausal symptoms. </li>
        <li> Menstrual issues. </li>
        <li> Mental and emotional health issues. </li>
        <li> Obesity. </li>
        <li> High blood pressure (hypertension). </li>
        <li> Sleep issues. </li>
      </ul>
    </section>
    <section class="container p-6 mx-auto my-10">
      <div class="w-full">
        <h3
          class="my-10 text-3xl font-bold border-b-2 border-wonder-primary text-wonder-primary"
        >
          Reach us
        </h3>
        <ContactForm primaryClass="wonder-primary">
          <span class="grid" slot="head">
            <h4 class="font-semibold text-wonder-primary">Connect with Us</h4>
            <p class="text-sm text-ayur-text">Your Wellness Journey Begins Here. Reach out to Wonder Life Today!</p>
          </span>
          <div slot="body">
            <Icon color="wonder-primary"
              label="Saras Tower Thuppumpadi, Thalacode P.O, Mulanthuruthy Ernakulam, PIN-682314"
            >
              <i class="fa-solid fa-location-dot" />
            </Icon>
            <Icon color="wonder-primary" label="+91 9632038278, +91 9633136484">
              <i class="fa-solid fa-mobile-screen-button" />
            </Icon>
            <Icon color="wonder-primary" label="contact@wonderlife123.in">
              <i class="fa-solid fa-envelope" />
            </Icon>
          </div>
          <div slot="foot">
            <h3>Follow us</h3>
            <!-- <div class="flex">
              <Icon>
                <i class="fa-brands fa-facebook" />
              </Icon>
              <Icon>
                <i class="fa-brands fa-youtube" />
              </Icon>
              <Icon>
                <i class="fa-brands fa-instagram" />
              </Icon>
            </div> -->
          </div>
        </ContactForm>
      </div>
    </section>
    <section>
      <img class="object-cover w-2/3 lg:w-1/3 mix-blend-multiply" src="/wonder/decor.webp" alt="">
    </section>
    <section >
      <Footer color="teal-900">
        <!-- bg-teal-900 -->
        <div class="grid w-full gap-20 mb-6 md:m-3 md:flex">
          <!-- <div class="w-full">
            <h3 class="my-6 text-2xl font-semibold">Ayur Life</h3>
            <p class="max-w-full">
              Lorem ipsum dolor sit amet, consecteturHome adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              id interdum velit laoreet id. Scelerisque varius morbi enim nunc.
              Pellentesque diam volutpat commodo rhoncus aenean vel elit
              scelerisque mauris pellentesque pulvinar.
            </p>
          </div> -->
          <div class="w-full">
            <h3 class="my-6 text-2xl font-semibold">Quick Links</h3>
            <ul class="grid gap-3 list-none">
              <a href="/"><li >Home</li></a>
              <a href="/ayurlife"><li >Ayur Life</li></a>
              <a href="/naturelife"><li >Nature Life</li></a>
              <a href="/holisticlife"><li >Holistic Life</li></a>
              <!-- <li>placeholder</li>
              <li>placeholder</li>
              <li>placeholder</li> -->
            </ul>
          </div>
        </div>
      </Footer>
    </section>
  </div>
  
