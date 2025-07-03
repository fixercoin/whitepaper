 # Phantom Wallet Servlet

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PhantomWalletServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Phantom Wallet</title>");
        out.println("<script src='https://cdn.jsdelivr.net/npm/@solana/web3.js@latest/dist/solana-web3.min.js'></script>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Phantom Wallet</h1>");
        out.println("<button id='connect-button'>Connect to Phantom Wallet</button>");
        out.println("<button id='get-balance-button'>Get Balance</button>");
        out.println("<button id='deposit-button'>Deposit</button>");
        out.println("<button id='withdraw-button'>Withdraw</button>");
        out.println("<div id='balance'></div>");
        out.println("<script>");
        out.println("let provider;");
        out.println("window.phantom = {");
        out.println("  solana: {");
        out.println("    connect: async () => {");
        out.println("      return { publicKey: { toString: () => 'Mock Public Key' } };");
        out.println("    },");
        out.println("    getBalance: async () => {");
        out.println("      return 100;");
        out.println("    }");
        out.println("  }");
        out.println("};");
        out.println("const connectButton = document.getElementById('connect-button');");
        out.println("const getBalanceButton = document.getElementById('get-balance-button');");
        out.println("const depositButton = document.getElementById('deposit-button');");
        out.println("const withdrawButton = document.getElementById('withdraw-button');");
        out.println("connectButton.addEventListener('click', async () => {");
        out.println("  try {");
        out.println("    provider = window.phantom.solana;");
        out.println("    const resp = await provider.connect();");
        out.println("    console.log('Connected to Phantom wallet:', resp.publicKey.toString());");
        out.println("  } catch (err) {");
        out.println("    console.log('Error connecting to Phantom wallet:', err);");
        out.println("  }");
        out.println("});");
        out.println("getBalanceButton.addEventListener('click', async () => {");
        out.println("  if (provider) {");
        out.println("    try {");
        out.println("      const balance = await provider.getBalance();");
        out.println("      document.getElementById('balance').innerText = 'Balance: ' + balance;");
        out.println("    } catch (err) {");
        out.println("      console.log('Error getting balance:', err);");
        out.println("    }");
        out.println("  } else {");
        out.println("    console.log('Please connect to Phantom wallet first');");
        out.println("  }");
        out.println("});");
        out.println("depositButton.addEventListener('click', async () => {");
        out.println("  if (provider) {");
        out.println("    try {");
        out.println("      console.log('Deposit function called');");
        out.println("    } catch (err) {");
        out.println("      console.log('Error depositing:', err);");
        out.println("    }");
        out.println("  } else {");
        out.println("    console.log('Please connect to Phantom wallet first');");
        out.println("  }");
        out.println("});");
        out.println("withdrawButton.addEventListener('click', async () => {");
        out.println("  if (provider) {");
        out.println("    try {");
        out.println("      console.log('Withdraw function called');");
        out.println("    } catch (err) {");
        out.println("      console.log('Error withdrawing:', err);");
        out.println("    }");
        out.println("  } else {");
        out.println("    console.log('Please connect to Phantom wallet first');");
        out.println("  }");
        out.println("});");
        out.println("</script>");
        out.println("</body>");
        out.println("</html>");
    }
}
