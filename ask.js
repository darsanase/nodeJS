var questions=[
"what is your name?",
"what is your team",
"which country are you from?"
]

var answer=[];

function ask(i){
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write("    :->   ");
}

process.stdin.on('data',function(data){
	answer.push(data.toString().trim());
	if (answer.length<questions.length){
		ask(answer.length);
	} else{
		process.exit();
	}
});

process.on('exit',function(){
	process.stdout.write("\n\n");
	process.stdout.write(`Hello People welcome ${answer[0]} from ${answer[2]} and he is from ${answer[1]} team . welcome!`);
	process.stdout.write("\n\n");
	}
	);

ask(0)