const languageInfo = {
    //language, year of release, description(in Japanese)
    "adb": ["2003", "Android Debug Bridgeは、2003年にGoogleによって開発されたAndroidのデバッグツールである。", "Android Debug Bridge"],
    "appleScript": ["1993", "AppleScriptは、1993年にAppleによって開発されたスクリプト言語である。", "AppleScript"],
    "async.py": ["2015", "Async Pythonは、2015年にGuido van Rossumによって開発されたPythonの非同期処理のための機能である。", "Async Python"],
    "bash": ["1989", "Bashは、1989年にBrian Foxによって開発されたUnixシェルである。", "Bash"],
    "bat": ["1989", "Batは、1989年にMicrosoftによって開発されたWindowsのバッチファイルである。", "Bat"],
    "c": ["1972", "C言語は、1972年にAT&Tベル研究所のデニス・リッチーによって開発されたプログラミング言語である。", "C"],
    "clj": ["2007", "Cloujureは、2007年にRich Hickeyによって開発されたプログラミング言語である。", "Cloujure"],
    "coffee": ["2009", "CoffeeScriptは、2009年にJeremy Ashkenasによって開発されたプログラミング言語である。", "CoffeeScript"],
    "cpp": ["1983", "C++は、1983年にベル研究所のビャーネ・ストロツルップによって開発されたプログラミング言語である。", "C++"],
    "cr": ["2014", "crystalは、2014年にManas Technology Solutionsによって開発されたプログラミング言語である。", "crystal"],
    "d": ["2001", "D言語は、2001年にWalter Brightによって開発されたプログラミング言語である。", "D"],
    "dart": ["2011", "Dartは、2011年にGoogleによって開発されたプログラミング言語である。", "Dart"],
    "dash": ["2010", "Dashは、2010年にKapeliによって開発されたプログラミング言語である。", "Dash"],
    "dpr": ["2018", "DPRは、2018年にDPR Groupによって開発されたプログラミング言語である。", "DPR"],
    "exs": ["2011", "elixirは、2011年にJose Valimによって開発されたプログラミング言語である。", "elixir"],
    "elm": ["2012", "elmは、2012年にEvan Czaplickiによって開発されたプログラミング言語である。", "elm"],
    "erl": ["1986", "erlangは、1986年にEricssonによって開発されたプログラミング言語である。", "erlang"],
    "el": ["2018", "ELは、2018年にElasticによって開発されたプログラミング言語である。", "EL"],
    "fs": ["2005", "F#は、2005年にMicrosoft Researchによって開発されたプログラミング言語である。", "F#"],
    "fth": ["1970", "Forthは、1970年にCharles H. Mooreによって開発されたプログラミング言語である。", "Forth"],
    "go": ["2009", "Goは、2009年にGoogleによって開発されたプログラミング言語である。", "Go"],
    "groovy": ["2003", "Groovyは、2003年にJames Strachanによって開発されたプログラミング言語である。", "Groovy"],
    "hack": ["2014", "Hackは、2014年にFacebookによって開発されたプログラミング言語である。", "Hack"],
    "hs": ["1990", "Haskellは、1990年にHaskell Curryによって開発されたプログラミング言語である。", "Haskell"],
    "html": ["1993", "HTMLは、1993年にTim Berners-Leeによって開発されたプログラミング言語である。", "HTML"],
    "hx": ["2005", "Haxeは、2005年にHaxe Foundationによって開発されたプログラミング言語である。", "Haxe"],
    "hy": ["2013", "Hyは、2013年にPaul Tagliamonteによって開発されたプログラミング言語である。", "Hy"],
    "java": ["1995", "Javaは、1995年にSun Microsystemsによって開発されたプログラミング言語である。", "Java"],
    "jl": ["2012", "Juliaは、2012年にJeff Bezansonによって開発されたプログラミング言語である。", "Julia"],
    "jst": ["1995", "JavaScriptは、1995年にNetscape Communications Corporationによって開発されたプログラミング言語である。", "JavaScript"],
    "kn": ["2012", "Kuinは、2012年にKuin Programming Language Projectによって開発されたプログラミング言語である。", "Kuin"],
    "kt": ["2011", "Kotlinは、2011年にJetBrainsによって開発されたプログラミング言語である。", "Kotlin"],
    "lol": ["2007", "LOLCODEは、2007年にAdam Lindsayによって開発されたプログラミング言語である。", "LOLCODE"],
    "lsp": ["2018", "LSPは、2018年にMicrosoftによって開発されたプログラミング言語である。", "LSP"],
    "lua": ["1993", "Luaは、1993年にRoberto Ierusalimschyによって開発されたプログラミング言語である。", "Lua"],
    "ml": ["1973", "ML言語は、1973年にRobin Milnerによって開発されたプログラミング言語である。", "ML"],
    "moon": ["2011", "MoonScriptは、2011年にLeafoによって開発されたプログラミング言語である。", "MoonScript"],
    "nako": ["2011", "Nadesikoは、2011年にHatenaによって開発されたプログラミング言語である。", "Nadesiko"],
    "nim": ["2008", "Nimは、2008年にAndreas Rumpfによって開発されたプログラミング言語である。", "Nim"],
    "nscripter": ["1998", "NScripterは、1998年にNaoki Takahashiによって開発されたプログラミング言語である。", "NScripter"],
    "p": ["1970", "Pascalは、1970年にNiklaus Wirthによって開発されたプログラミング言語である。", "Pascal"],
    "pde": ["2001", "PDEは、2001年にProcessing Foundationによって開発されたプログラミング言語である。", "PDE"],
    "php": ["1995", "PHPは、1995年にRasmus Lerdorfによって開発されたプログラミング言語である。", "PHP"],
    "pl": ["1964", "PL/Iは、1964年にIBMによって開発されたプログラミング言語である。", "PL/I"],
    "ps1": ["2006", "Powershellは、2006年にMicrosoftによって開発されたプログラミング言語である。", "Powershell"],
    "py": ["1991", "Pythonは、1991年にGuido van Rossumによって開発されたプログラミング言語である。", "Python"],
    "raku": ["2000", "Rakuは、2000年にLarry Wallによって開発されたプログラミング言語である。", "Raku"],
    "rb": ["1995", "Rubyは、1995年にYukihiro Matsumotoによって開発されたプログラミング言語である。", "Ruby"],
    "rdr": ["2018", "RDRは、2018年にRDR Groupによって開発されたプログラミング言語である。", "RDR"],
    "re": ["2015", "Reasonは、2015年にFacebookによって開発されたプログラミング言語である。", "Reason"],
    "res": ["2018", "Rescriptは、2018年にJordan Walkeによって開発されたプログラミング言語である。", "Rescript"],
    "rack": ["1995", "Racketは、1995年にMatthew Flattによって開発されたプログラミング言語である。", "Racket"],
    "rs": ["2010", "Rustは、2010年にMozilla Researchによって開発されたプログラミング言語である。", "Rust"],
    "sb3": ["2003", "Scratchは、2003年にMIT Media Labによって開発されたプログラミング言語である。", "Scratch"],
    "scala": ["2003", "Scalaは、2003年にMartin Oderskyによって開発されたプログラミング言語である。", "Scala"],
    "scm": ["1975", "Schemeは、1975年にGerald Jay Sussmanによって開発されたプログラミング言語である。", "Scheme"],
    "svelte": ["2016", "Svelteは、2016年にRich Harrisによって開発されたプログラミング言語である。", "Svelte"],
    "swift": ["2014", "Swiftは、2014年にAppleによって開発されたプログラミング言語である。", "Swift"],
    "tex": ["1978", "TeXは、1978年にDonald Knuthによって開発されたプログラミング言語である。", "TeX"],
    "ts": ["2012", "TypeScriptは、2012年にMicrosoftによって開発されたプログラミング言語である。", "TypeScript"],
    "v": ["2019", "Vは、2019年にAlexander Medvednikovによって開発されたプログラミング言語である。", "V"],
    "vb": ["1996", "VBScriptは、1996年にMicrosoftによって開発されたプログラミング言語である。", "VBScript"],
    "vim": ["1991", "Vim scriptは、1991年にBram Moolenaarによって開発されたプログラミング言語である。", "Vim script"],
    "vue": ["2014", "Vue.jsは、2014年にEvan Youによって開発されたプログラミング言語である。", "Vue.js"],
    "wat": ["2018", "watは、2018年にWebAssembly Community Groupによって開発されたプログラミング言語である。", "wat"],
    "wy": ["2018", "WenyanLangは、2018年にYiyi Wangによって開発されたプログラミング言語である。", "WenyanLang"],
    "zen": ["2015", "ZenScriptは、2015年にCraftTweakerによって開発されたプログラミング言語である。", "ZenScript"],
    "zig": ["2015", "Zigは、2015年にAndrew Kelleyによって開発されたプログラミング言語である。", "Zig"],
};

export function getLanguageInfo(arr) {
    let result = [];
    const keys = Object.keys(languageInfo);
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] < keys.length) {
            let langKey = keys[arr[i]];
            let year = languageInfo[langKey][0];
            let description = languageInfo[langKey][1];
            let langName = languageInfo[langKey][2];
            result.push([year, description, langName, langKey]);
        }
    }
    return result;
}
