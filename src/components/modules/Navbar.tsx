import { Button, Flex } from '../elements';

const Navbar = () => {
  return (
    <Flex
      className={`
        w-full h-16
        justify-around items-center 
        text-black
        border-b border-solid border-gray-300
        z-30 
        transition duration-300 ease-in-out 
        shadow-inner translateZ-0 
        backdrop-filter backdrop-saturate-180 backdrop-blur-5 
        bg-opacity-80 bg-white
        sticky
        top-0
      `}
    >
      <Flex className="gap-4">
        <Button label="light" />
        <Button variant="secondary" label="pt-BR" />
      </Flex>

      <Flex className="gap-4">
        <a href="">
          <h1>Sobre</h1>
        </a>

        <a href="">
          <h1>Projetos</h1>
        </a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
