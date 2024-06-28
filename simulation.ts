
import chalk from 'chalk';

export default function runSimulation(){

  const hackerTerms = [
    "array", "function", "variable", "loop", "protocol", "firewall",
    "interface", "bandwidth", "syntax", "terminal", "kernel", "malware",
    "framework", "repository", "compiler", "database", "encryption",
    "hash", "IP address", "bug", "virus", "cybersecurity", "algorithm"
  ];

  const randomDataLines = [
    "Initializing array...",
    "Compiling kernel...",
    "Encrypting data...",
    "Setting up firewall rules...",
    "Connecting to repository...",
    "Running diagnostics...",
    "Decrypting protocol...",
    "Uploading to server...",
    "Synchronizing databases...",
    "Scanning for malware..."
  ];

  function getRandomElement(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateRandomDataLine(): string {
    return getRandomElement(randomDataLines) + " " + getRandomElement(hackerTerms);
  }

  function printRandomDataLines(count: number): void {
    for (let i = 0; i < count; i++) {
      console.log(chalk.hex('#00FF00')(generateRandomDataLine())); // Green color for random data lines
    }
  }

  function fetchData() {
    return new Promise<void>((resolve, reject) => {
      // Simulate random failure/success
      const success = Math.random() > 0.3; // 70% chance of success
      setTimeout(() => {
        if (success) {
          resolve();
        } else {
          reject();
        }
      }, 1000); // Simulate network delay
    });
  }

  async function main() {
    let attempts = 0;
    let success = false;

    while (!success) {
      attempts++;
      console.log(chalk.hex('#FF0000')(`Attempt ${attempts}: Fetching data...`)); // Red color for attempt message
      printRandomDataLines(10);

      try {
        await fetchData();
        success = true;
        console.log(chalk.blue("Data fetched successfully!")); // Blue color for success message
      } catch {
        console.log(chalk.yellow("Data fetch failed, retrying...")); // Yellow color for failure message
      }
    }

    // Proceed with next function
    console.log(chalk.cyan("Starting next function...")); // Cyan color for next function message
    endFunction(); // Call the end function after completing the main task
  }

  for(let i = 0; i <=1000; i++){
    console.log(chalk.cyan("Success! System Breached successfully!!!!! ", (i+=5)*1000 + " Files Copied!")); // Cyan color for next function message
    
  }

  function endFunction() {
    console.log(chalk.red("Erasing digital footprints..."));
    setTimeout(() => {
      console.log(chalk.red("Footprints erased."));
      console.log(chalk.green("System is Back Secured.."));
    }, 3000); // Simulate delay for erasing footprints and securing the system
  }

  main();

};
