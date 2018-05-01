import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Chef\'s List:';
  recipes: Recipe[] = [
    new Recipe('Scrambled Eggs', 'Eggs', 'Scramble it.'),
    new Recipe('Toast', 'Bread', 'Toast it.'),
    new Recipe('Souffle', 'Butter, All-purpose Flour, Salt, Pinch Pepper, Milk(1%), Eggs, Egg Whites, Cream of Tartar', 'Preheat oven to 375° F (190° C). Melt butter in medium saucepan over low heat. Stir in flour, salt and pepper. Cook, stirring constantly, until mixture is smooth and bubbly. Stir in milk all at once. Continue stirring until mixture boils and is smooth and thickened. Separate eggs. Beat yolks well and add 1/4 cup (50 mL) of warm sauce mixture to egg yolks. Combine yolk mixture with remaining sauce, blending thoroughly. If desired, add finely chopped filling ingredients, stirring into white sauce until blended (see variations). Set sauce aside to cool slightly. Beat egg whites and cream of tartar in large bowl, until stiff but not dry. Fold some of the egg whites into sauce to make it lighter, then gently but thoroughly fold the sauce into the remaining egg whites. Carefully pour into 4-cup (1 L) soufflé or casserole dish. Bake in preheated 375° F (190° C) oven until puffed and lightly browned, 20 to 25 minutes or until done. Serve immediately.')
  ];

  selectedRecipe = null;
  finishedDisplay(){
    this.selectedRecipe = null;
    this.editRecipe = null;
  }

  displayRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  editRecipe = null;
  displayEdit(clickedEdit){
    this.editRecipe = clickedEdit;
  }
}
